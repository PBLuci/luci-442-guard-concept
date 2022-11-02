import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router'

export class CustomRoutingStrategie extends BaseRouteReuseStrategy{
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log(future)
    console.log(curr)
    if(future.data['reuseRoute'] !== null || future.data['reuseRoute'] !== undefined){
      return future.data['reuseRoute']
    }

    return super.shouldReuseRoute(future,curr)
  }
}
