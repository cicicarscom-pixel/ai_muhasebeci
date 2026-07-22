export class InvitationDomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvitationDomainError';
  }
}

export class DuplicateActiveInvitationError extends InvitationDomainError {
  constructor(phone: string) {
    super(`Bu telefon numarası (${phone}) için zaten aktif bir davet bulunuyor.`);
    this.name = 'DuplicateActiveInvitationError';
  }
}

export class InvalidPhoneFormatError extends InvitationDomainError {
  constructor(phone: string) {
    super(`Geçersiz telefon numarası formatı: ${phone}. E.164 formatında olmalıdır.`);
    this.name = 'InvalidPhoneFormatError';
  }
}

export class AuthorizationError extends InvitationDomainError {
  constructor(message: string = "Bu işlemi gerçekleştirmek için yetkiniz yok.") {
    super(message);
    this.name = 'AuthorizationError';
  }
}
