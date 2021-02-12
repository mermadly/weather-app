import TinyCards from '../Components/TinyCards/TinyCards'
import {render} from '@testing-library/react'

describe ('TinyCards', () => {
    const data = [
        {
          date: "Monday, Feb 8th 2021",
          icon: "10d",
          tempMax: 22,
          tempMin: 19,
        },
        {
          date: "Tuesday, Feb 9th 2021",
          icon: "10d",
          tempMax: 25,
          tempMin: 20,
        },
        {
          date: "Wednesday, Feb 10th 2021",
          icon: "4a",
          tempMax: 18,
          tempMin: 15,
        },
        {
          date: "Thursday, Feb 11th 2021",
          icon: "10d",
          tempMax: 20,
          tempMin: 19,
        },
        {
          date: "Friday, Feb 12th 2021",
          icon: "10d",
          tempMax: 23,
          tempMin: 18,
        },
      ];
    
    const {queryAllByTestId} = render(<TinyCards forecast={data}/>) 
    const temperatures = queryAllByTestId(/temps/i)

    it('should show correct temperatures from data', () => {
        expect(temperatures[4]).toHaveTextContent('23°/ 18°')
        expect(temperatures[4]).not.toHaveTextContent('-20°/ 40°')
    }) 
})