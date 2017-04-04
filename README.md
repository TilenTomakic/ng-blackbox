# Ng-BlackBox

![ng-blackbox logo](https://github.com/TilenTomakic/ng-blackbox/raw/master/blackbox-app/assets/ng-blackbox-logo.png)

> If airplanes have black boxes why not web apps?

## Description

Ng-BlackBox is development dock that provides ability to easily monitor observables, logs, basically anything that you wan't in your app. It was inspired by redux-devtools.

This package is under active development so please tread it as alpha version. I'm also looking for better way of creating library since currently you need scss support.

> I will write better README when I finish implementing all futures and tests. 

> If you want to contribute you are more than welcome to do so. I will also appreciate any tips or suggestion how to make library better.

## Features

 - [x] subscribe to observables and see how data is changing
 - [x] see last observable value
 - [x] can be used instead of `console.log`
 - [x] add custom monitor into dock
 
![demo](https://github.com/TilenTomakic/ng-blackbox/raw/master/blackbox-app/assets/peek.gif) 

## Installation

Npm
```
npm install ng-blackbox
```

or if you are using yarn
```
yarn add ng-blackbox
```

## Usage

Add `BlackBoxModule` to imports
```typescript
import { BlackBoxModule } from 'ng-blackbox';

@NgModule({
  ...,
  imports: [
    ..., BlackBoxModule
  ]
 }
```

Add dock into your template
```html
<app-black-box [visible]="true">
  <app-black-box-monitor [title]="'Logs'">
    <app-black-box-logs></app-black-box-logs>
  </app-black-box-monitor>

  <app-black-box-monitor [title]="'Observables'">
    <app-black-box-observables></app-black-box-observables>
  </app-black-box-monitor>
</app-black-box>
```
### Keyboard shortcuts

| key combination | action  |
|---|---|
| Ctrl + H  | SHow/hide dock  |
| Ctrl + M  | Change dock position  |

For changing default keys read #configuration.

### Custom monitor

```html
<app-black-box>
  ...

  <app-black-box-monitor [title]="'Monitor example'">
    Hello world!
  </app-black-box-monitor>
</app-black-box>
```

### Configuration
// TODO

Example:
```html
<app-black-box 
  [visible]="true"
  [visibilityKey]="72"
  [moveKey]="77"
  [autoHide]="true">
  ...
</app-black-box>
```


## Demo
You can find demo in `blackbox-app` folder. It's using [angular-cli](https://github.com/angular/angular-cli). If you wan't to run it just do `git clone`, `yarn install` or `npm intall` and finally `ng serve` (you must have [angular-cli](https://github.com/angular/angular-cli) installed).

## Licence
MIT
