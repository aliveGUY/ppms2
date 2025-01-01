import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller()
export class HTMLController {

  @Get()
  @Render('pages/home')
  getHomePage() {
    return { title: 'Home Page' };
  }

  @Get('/details/:id')
  @Render('pages/details')
  getAboutPage(@Param('id') id: string) {
    return {
      title: 'Details Page',
      id: id
    };
  }

  @Get('/booking/new')
  @Render('pages/createBooking')
  getCreateBookingPage() {
    return { title: 'Create Appointment' };
  }
}
