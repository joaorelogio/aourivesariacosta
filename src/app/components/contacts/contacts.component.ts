import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormValidators } from '../../services/form-validators.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  title: string;
  subtitle: string;
  subtitle2: string;
  contactForm: FormGroup;

  lat: string;
  lng: string;
  location: Object;

  constructor(
    private fb: FormBuilder,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.title = 'Contactos';
    this.subtitle = 'Loja';
    this.subtitle2 = 'Pedido';

    this.createContactForm();
    this.createMap();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, FormValidators.allPhoneNumber]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  onReset() {
    this.contactForm.reset();
    this.createContactForm();
  }

  createMap() {
    this.mapService.getLocation().subscribe(data => {
      console.log(data);
      // this.lat = data.latitude;
      // this.lng = data.longitude;
    });

  }

}
