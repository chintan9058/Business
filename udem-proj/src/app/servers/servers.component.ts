import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
  serverName = 'Test server';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
