import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';
@Injectable({
  providedIn: 'root',
})
export class DeactiveGuardGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isDirty = component.canDeactive();
    if (isDirty) {
      const status = window.confirm('Bạn có chắc muốn thoát không');
      if (status) {
        return true;
      }
    }

    return false;
  }
}
