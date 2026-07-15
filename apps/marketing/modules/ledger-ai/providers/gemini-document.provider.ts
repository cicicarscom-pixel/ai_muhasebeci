import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import { DocumentAIProvider, DocumentExtractionResult, DocumentType } from '../domain/types';

export class GeminiDocumentProvider implements DocumentAIProvider {
  getProviderId(): string {
    return 'gemini-1.5-pro';
  }

  async extractDocumentData(imageUrl: string, mimeType: string): Promise<DocumentExtractionResult> {
    // Note: If using signed URLs or absolute paths with the AI SDK, 
    // it handles fetching the URL and passing it to the model.
    const { object } = await generateObject({
      model: google('gemini-1.5-pro-latest'), // Using gemini-1.5-pro for best vision/reasoning
      schema: z.object({
        documentType: z.enum(['receipt', 'invoice', 'other']),
        vendorName: z.string().nullable().describe('The name of the vendor or supplier on the document.'),
        vendorTaxIdentifier: z.string().nullable().describe('Tax ID (VKN) or TC Identity Number (TCKN) of the vendor.'),
        issueDate: z.string().nullable().describe('The date the document was issued, formatted as YYYY-MM-DD.'),
        currency: z.string().default('TRY').describe('The currency of the transaction, e.g., TRY, USD, EUR.'),
        netAmount: z.number().nullable().describe('The total net amount before taxes.'),
        taxAmount: z.number().nullable().describe('The total tax/VAT (KDV) amount.'),
        totalAmount: z.number().nullable().describe('The grand total amount including taxes.'),
        confidenceScore: z.number().describe('A score between 0 and 1 indicating how confident the model is about this extraction.'),
        lines: z.array(z.object({
          description: z.string().nullable().describe('Description of the item or service.'),
          quantity: z.number().nullable(),
          unitPrice: z.number().nullable(),
          taxRate: z.number().nullable().describe('The tax rate applied to this item, e.g. 18 or 20.'),
          netAmount: z.number().nullable(),
          taxAmount: z.number().nullable(),
          totalAmount: z.number().nullable()
        })).describe('List of line items in the invoice or receipt.')
      }),
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'You are an expert accountant AI. Please extract the requested structured data from this receipt or invoice.' },
            { type: 'image', image: new URL(imageUrl) }
          ],
        },
      ],
    });

    return {
      documentType: object.documentType as DocumentType,
      vendorName: object.vendorName,
      vendorTaxIdentifier: object.vendorTaxIdentifier,
      issueDate: object.issueDate,
      currency: object.currency,
      netAmount: object.netAmount,
      taxAmount: object.taxAmount,
      totalAmount: object.totalAmount,
      confidenceScore: object.confidenceScore,
      lines: object.lines.map(l => ({
        description: l.description,
        quantity: l.quantity,
        unitPrice: l.unitPrice,
        taxRate: l.taxRate,
        netAmount: l.netAmount,
        taxAmount: l.taxAmount,
        totalAmount: l.totalAmount
      }))
    };
  }
}
