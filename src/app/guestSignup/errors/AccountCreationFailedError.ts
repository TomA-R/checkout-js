import { setPrototypeOf, CustomError } from '../../common/error';
import { getLanguageService } from '../../locale';

export class AccountCreationFailedError extends CustomError {
    constructor(data: Error) {
        super({
            name: 'ACCOUNT_CREATION_FAILED',
            message: getLanguageService().translate('customer.create_account_error'),
            data,
        });

        setPrototypeOf(this, AccountCreationFailedError.prototype);
    }
}
