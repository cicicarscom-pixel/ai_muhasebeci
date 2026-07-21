-- Drop the foreign key constraint on taxpayer_id
ALTER TABLE invoice_schemas DROP CONSTRAINT invoice_schemas_taxpayer_id_fkey;

-- Drop the taxpayer_id column entirely
ALTER TABLE invoice_schemas DROP COLUMN taxpayer_id;
