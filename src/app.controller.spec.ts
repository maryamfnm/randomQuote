import { Test,TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';


describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('Test random quote service', () => {
    it('should return random quote', async () => {

      // Mock data
      const mockData = {
        quote_id: 999,
        quote: 'Test Quote',
        character: 'Test'
      };
      jest.spyOn(appService, 'getRandomQuote').mockReturnValue(JSON.stringify(mockData));

      expect(await appController.getRandomQuote()).toEqual(JSON.stringify(mockData));
    });
    
  });
  
});
