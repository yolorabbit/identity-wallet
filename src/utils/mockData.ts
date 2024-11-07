import { addHours } from "date-fns";
import { IMAGES } from "../constants";

export default {
  showingList: [
    {
      clients: [],
      properties: [
        {
          imgurl: '',
          address: 'Street 47 W 13th St, New York',
          price: 45460,
          timefrom: new Date('2024-05-06 10:30'),
          timeto: new Date('2024-05-06 12:30'),
          order: 1,
        },
        {
          imgurl: '',
          address: 'Street 59 W 27th St, Washington',
          price: 35960,
          timefrom: new Date('2024-05-06 12:30'),
          timeto: new Date('2024-05-06 16:30'),
          order: 1,
        },
        {
          imgurl: '',
          address: 'Street 59 W 27th St, Washington',
          price: 35960,
          timefrom: new Date('2024-05-06 12:30'),
          timeto: new Date('2024-05-06 16:30'),
          order: 1,
        }
      ],
      title: 'Apartment For Sale',
      description: 'Apartment For Sale description description description description',
      starttime: new Date(),
      endtime: addHours(new Date(), 1),
    },
    {
      clients: [],
      properties: [
        {
          imgurl: '',
          address: 'Street 26 V 98th St, New York',
          price: 58970,
          timefrom: new Date('2024-05-06 10:30'),
          timeto: new Date('2024-05-06 12:30'),
          order: 1,
        },
        {
          imgurl: '',
          address: 'Street 116 W 27th St, Washington',
          price: 18790,
          timefrom: new Date('2024-05-06 10:30'),
          timeto: new Date('2024-05-06 12:30'),
          order: 1,
        }
      ],
      title: 'Apartment For Appointment',
      description: 'Apartment For Appointment description description description description',
      starttime: new Date(),
      endtime: addHours(new Date(), 1),
    },
  ],
  clientLlist: [
    { id: '662ba52753976b49c86d3f79', avatar: IMAGES.user1, name: 'Olvia Paty' },
    { id: '662ba52753976b49c86d3f78', avatar: IMAGES.user2, name: 'Sophia Jacib' },
    { id: '662ba52753976b49c86d3f77', avatar: IMAGES.user3, name: 'Micle Wang' },
    { id: '662ba52753976b49c86d3f76', avatar: IMAGES.user4, name: 'Jiimay Doe' },
    { id: '662ba52753976b49c86d3f75', avatar: IMAGES.user5, name: 'Tonney Simarn' },
    { id: '662ba52753976b49c86d3f74', avatar: IMAGES.user3, name: 'Keren Joe' },
    { id: '662ba52753976b49c86d3f73', avatar: IMAGES.user4, name: 'Tonney Kakkar' },
    { id: '662ba52753976b49c86d3f72', avatar: IMAGES.user1, name: 'Messay Doe' },
    { id: '662ba52753976b49c86d3f71', avatar: IMAGES.user5, name: 'Angel Que' },
  ],
}