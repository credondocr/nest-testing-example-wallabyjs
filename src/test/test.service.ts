import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    getSomething(): string {
        return 'something';
    }
}
