import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer:boolean=true;
  serverCreated= false;
  // serverCreationStatus = 'No server was created!'
  serverName = ''
  username=''
  servers=['Testserver','Testserver 2']
  showPassword=true;
  buttonClick:any=[]

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer (){
    this.serverCreated=true;
    this.servers.push(this.serverName)
    console.log(this.servers)
    // this.serverCreationStatus=`Server was created, Name is ${this.serverName}`
  }
  onUpdateServerName(event:any){
    this.serverName=event.target.value

    
  }
  resetUsername (){
    this.username=''
  }
  onDisplayPass(){
    this.showPassword=!this.showPassword
    // this.buttonClick.push(this.buttonClick.length + 1)
    this.buttonClick.push(new Date())
  }

}
