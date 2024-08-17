import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getWelcome() {
        return 'Welcome to API Backend Application'
    }
}
