export interface LinkAdvisorRequest {
  connection_code: string;
}

export interface LinkAdvisorResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface AccountingFirm {
  id: string;
  user_id: string; // The accountant's user ID
  connection_code: string;
  name?: string;
  location?: string;
  rating?: number;
  active_taxpayers?: number;
}
