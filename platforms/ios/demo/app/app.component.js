"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("nativescript-actioncable");
var AppComponent = AppComponent_1 = (function () {
    function AppComponent() {
        this.counter = 16;
        global.ActionCable.startDebugging();
        global.cable = global.ActionCable.createConsumer(AppComponent_1.URL);
        this.room = subscribe();
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        this.room.speak("Counters left : " + this.counter);
    };
    AppComponent.prototype.onUnsubscribe = function () {
        //console.log('should unsubscribe....');
        global.cable.subscriptions.remove(this.room);
        delete (this.room);
    };
    return AppComponent;
}());
AppComponent.URL = "ws://localhost:3000/cable";
AppComponent = AppComponent_1 = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
function subscribe() {
    var room = global.cable.subscriptions.create("MessagesChannel", {
        connected: function () {
            console.log("connected to MessageChannel");
        },
        diconnected: function () {
            console.log('diconnected from MessageChannel');
        },
        received: function (data) {
            console.log("received data " + JSON.stringify(data));
        }
    });
    room.speak = function (message) {
        return room.perform('speak', { message: message });
    };
    return room;
}
var AppComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFNcEMsSUFBYSxZQUFZO0lBS3JCO1FBSk8sWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUt4QixNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsY0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFXLGlDQUFPO2FBQWxCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDdkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQywrQ0FBK0MsQ0FBQztZQUMzRCxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFTSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxvQ0FBYSxHQUFwQjtRQUNJLHdDQUF3QztRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTNCVSxnQkFBRyxHQUFZLDJCQUEyQixDQUFDO0FBSHpDLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7S0FDcEMsQ0FBQzs7R0FDVyxZQUFZLENBOEJ4QjtBQTlCWSxvQ0FBWTtBQWlDekI7SUFFSSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7UUFDNUQsU0FBUyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxXQUFXLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELFFBQVEsRUFBRSxVQUFDLElBQUk7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFDLE9BQU87UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFBO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hY3Rpb25jYWJsZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlciA9IDE2O1xuICAgIHJvb206IGFueTtcbiAgICBzdGF0aWMgVVJMIDogc3RyaW5nID0gXCJ3czovL2xvY2FsaG9zdDozMDAwL2NhYmxlXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBnbG9iYWwuQWN0aW9uQ2FibGUuc3RhcnREZWJ1Z2dpbmcoKTtcbiAgICAgICAgZ2xvYmFsLmNhYmxlID0gZ2xvYmFsLkFjdGlvbkNhYmxlLmNyZWF0ZUNvbnN1bWVyKEFwcENvbXBvbmVudC5VUkwpO1xuICAgICAgICB0aGlzLnJvb20gPSBzdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXIgKyBcIiB0YXBzIGxlZnRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIkhvb3JyYWFheSEgXFxuWW91IGFyZSByZWFkeSB0byBzdGFydCBidWlsZGluZyFcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIHRoaXMuY291bnRlci0tO1xuICAgICAgICB0aGlzLnJvb20uc3BlYWsoXCJDb3VudGVycyBsZWZ0IDogXCIgKyB0aGlzLmNvdW50ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblVuc3Vic2NyaWJlKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Nob3VsZCB1bnN1YnNjcmliZS4uLi4nKTtcbiAgICAgICAgZ2xvYmFsLmNhYmxlLnN1YnNjcmlwdGlvbnMucmVtb3ZlKHRoaXMucm9vbSk7XG4gICAgICAgIGRlbGV0ZSh0aGlzLnJvb20pO1xuICAgIH1cbiAgICAgXG59XG5cblxuZnVuY3Rpb24gc3Vic2NyaWJlKCl7XG5cbiAgICB2YXIgcm9vbSA9IGdsb2JhbC5jYWJsZS5zdWJzY3JpcHRpb25zLmNyZWF0ZShcIk1lc3NhZ2VzQ2hhbm5lbFwiLCB7XG4gICAgICAgIGNvbm5lY3RlZDogKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIHRvIE1lc3NhZ2VDaGFubmVsXCIpO1xuICAgICAgICB9LFxuICAgICAgICBkaWNvbm5lY3RlZDogKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaWNvbm5lY3RlZCBmcm9tIE1lc3NhZ2VDaGFubmVsJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVkOiAoZGF0YSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgZGF0YSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcm9vbS5zcGVhayA9IChtZXNzYWdlKT0+IHtcbiAgICAgICAgcmV0dXJuIHJvb20ucGVyZm9ybSgnc3BlYWsnLCB7bWVzc2FnZTogbWVzc2FnZX0pO1xuICAgIH1cbiAgICByZXR1cm4gcm9vbTtcbn1cbiJdfQ==