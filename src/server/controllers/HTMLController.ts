import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class HTMLController {

  @Get()
  @Render('pages/home')
  getHomePage() {
    return { title: 'Home Page' };
  }

  @Get('/details')
  @Render('pages/details')
  getAboutPage() {
    return { title: 'Details Page' };
  }
}
