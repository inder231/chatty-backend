import { SignUp } from '@auth/controllers/signup';
import  { Router } from 'express';

class AuthRoutes {
  private router: Router;

  constructor (){
    this.router = Router();
  }
  public routes():Router {
    this.router.post('/signup',SignUp.prototype.create);
    // this.router.post('/signin');
    return this.router;
  }
};

export const authRoutes: AuthRoutes = new AuthRoutes();