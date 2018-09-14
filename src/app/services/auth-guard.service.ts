import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private authService : AuthService, private router : Router){

    }

    canActivate() : Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated().then(
            (authenticated : boolean) => {
                if(authenticated){
                    return true;
                }else{  this.router.navigate(['/']);  }
            }
        );
    }
}