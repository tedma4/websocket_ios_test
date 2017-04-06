"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [platform_1.NativeScriptModule],
    })
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQWdHO0FBQ2hHLHNDQUF5QztBQUN6QyxpREFBK0M7QUFPL0MsSUFBTSxrQkFBa0I7SUFBeEI7SUFBMEIsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFyQixrQkFBa0I7SUFMdkIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLDZCQUFrQixDQUFDO0tBQ2hDLENBQUM7R0FDSSxrQkFBa0IsQ0FBRztBQUUzQixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLCBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXG59KVxuY2xhc3MgQXBwQ29tcG9uZW50TW9kdWxlIHt9XG5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBDb21wb25lbnRNb2R1bGUpOyJdfQ==