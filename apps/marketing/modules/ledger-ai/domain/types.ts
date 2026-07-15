export type DocumentType = 'receipt' | 'invoice' | 'other';

export interface DocumentExtractionResult {
  vendorName: string | null;
  vendorTaxIdentifier: string | null;
  issueDate: string | null; // YYYY-MM-DD
  currency: string; // Default TRY
  netAmount: number | null;
  taxAmount: number | null;
  totalAmount: number | null;
  documentType: DocumentType;
  lines: DocumentLineExtraction[];
  confidenceScore: number;
}

export interface DocumentLineExtraction {
  description: string | null;
  quantity: number | null;
  unitPrice: number | null;
  taxRate: number | null;
  netAmount: number | null;
  taxAmount: number | null;
  totalAmount: number | null;
}

export interface DocumentAIProvider {
  /**
   * Identifies the provider (e.g. 'openai-gpt4o', 'gemini-1.5-flash')
   */
  getProviderId(): string;

  /**
   * Process a document image to extract structured data
   * @param imageUrl The signed URL of the document image
   * @param mimeType e.g., 'image/jpeg', 'application/pdf'
   */
  extractDocumentData(imageUrl: string, mimeType: string): Promise<DocumentExtractionResult>;
}
