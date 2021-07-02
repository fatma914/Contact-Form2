import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  img: string = "./assets/images/photo1.jpg";
  img1: string = "./assets/images/photo2.jpg";
  img2: string = "./assets/images/photo3.jpg";
  email: any;
  getErrorMessage = () => {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  };

  getValues = (val: any) => {
    console.warn(val)
  };


  constructor(private breakpointObserver: BreakpointObserver) {
  }


  toServices() {
// @ts-ignore
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
  }


  toHome() {
    // @ts-ignore
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
  }


  toAboutUs() {
    // @ts-ignore
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }


  toContactUs() {
    // @ts-ignore
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  }


  toOurTeachers() {
    // @ts-ignore
    document.getElementById("ourteachers").scrollIntoView({behavior: "smooth"});
  }


}

