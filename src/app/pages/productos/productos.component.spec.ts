import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComponent } from './productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

fdescribe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateModule,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http);
            },
            deps: [HttpClient]
          }
        }),
        StoreModule.forRoot(appReducers),
        NgbModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se prueba que se retorne los dtos esperados', () => {
    component.construirDatos();
    expect(Object.keys(component.tiposProductos).length).not.toEqual(0);
  });

  it('se prueba que se retorne el producto actual', () => {
    component.construirDatos();
    const resp = component.tipoProductoActual('CREDIT');
    console.error(resp);

    expect(resp).toEqual({
      tipo: 'CREDIT',
      length: 3
    });

  });

  it('Se espera que retorne todos los bancos', () => {
    component.otrosBancos = true;
    component.construirDatos();
    expect(component.otrosBancos).toBeTruthy();
  });
});
