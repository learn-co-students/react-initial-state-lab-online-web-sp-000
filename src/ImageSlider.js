import React from 'react'



export default  class ImageSlider extends React.Component {

     constructor () {
         super()
         this.state = {
          currentSlideIndex: 0

         }

         
        }
        
        slide = () => {

            this.setState({
                currentSlideIndex: this.slide.currentSlideIndex + 1
            
            })
        }
        render () {
            return (

         <div>

        I am on slide {this.state.currentSlideIndex}
         
         
         </div>

       
    )
    
    
    }
     
} 