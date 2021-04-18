import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HelperService } from './../service/helper.service';



@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  linkInfo:any
  constructor(private router: Router,private hp:HelperService) {this.hp.sharableData.subscribe((res)=>this.linkInfo=res)}

  mobileNum = "my mobile n";
  ngOnInit() {}
  
  isMobile() {
    return false;
  }
  onClickWhatsapp() {
    let apilink = "https://";
    apilink += this.isMobile() ? "api" : "web";
    apilink +=
      ".whatsapp.com/send?phone=" + this.mobileNum + "&text=" + encodeURI("");
    window.open(apilink, "_blank");
  }
}