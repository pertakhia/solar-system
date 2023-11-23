import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  public planets = [
    {
      id: 1,
      name: 'Mercury',
      description:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      radius: '2,439.7 km',
      satellites: '0',
      gravitation: '3.7 m/s²',
    },
    {
      id: 2,
      name: 'Venus',
      description:
        'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.',
      radius: '6,051.8 km',
      satellites: '0',
      gravitation: '8.87 m/s²',
    },
    {
      id: 3,
      name: 'Earth',
      description:
        'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earths surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere.',
      radius: '6,371 km',
      satellites: '1',
      gravitation: '9.807 m/s²',
    },
    {
      id: 4,
      name: 'Mars',
      description:
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.',
      radius: '3,389.5 km',
      satellites: '2',
      gravitation: '3.711 m/s²',
    },
    {
      id: 5,
      name: 'Jupiter',
      description:
        'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
      radius: '69,911 km',
      satellites: '79',
      gravitation: '24.79 m/s²',
    },
    {
      id: 6,
      name: 'Saturn',
      description:
        'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.',
      radius: '58,232 km',
      satellites: '82',
      gravitation: '10.44 m/s²',
    },
    {
      id: 7,
      name: 'Uranus',
      description:
        'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, he was the grandfather of Zeus and father of Cronus.',
      radius: '25,362 km',
      satellites: '27',
      gravitation: '8.87 m/s²',
    },
    {
      id: 8,
      name: 'Neptune',
      description:
        'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
      radius: '24,622 km',
      satellites: '14',
      gravitation: '11.15 m/s²',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
