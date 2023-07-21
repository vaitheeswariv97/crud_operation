import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crud_operation';
  private readonly VAPID_PUBLIC_KEY =
    'BBR6Wp_jdBtcamjbFKEzBOtxQlaWWTw2NqVDto9U-dY8FTg73kVFHsygy8x1_jxXfOOREX3qygVbqgA9398Su2c';

  constructor(private swPush: SwPush) {}
  ngOnInit(): void {
    this.requestSubscription();
  }

  requestSubscription = () => {
    if (!this.swPush.isEnabled) {
      console.log('Notification is not enabled.');
      return;
    }
    //console.log(this.VAPID_PUBLIC_KEY);
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((_) => {
        console.log(this.VAPID_PUBLIC_KEY);
        console.log(JSON.stringify(_));
      })
      .catch((_) => console.log);
  };
}
