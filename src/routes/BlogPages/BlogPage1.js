import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import '../../components/BlogPagesStyles.css'
import HeroImage from '../../components/HeroImage'

function BlogPage1() {
  return (
    <div>
        <Navbar/>
        <HeroImage />
        <div className='wrapper'>
            <div className='page'>
                <h1 className='heading'>
                    IMPROVING RESTAURANT LABOR MANAGEMENT THROUGH MACHINE LEARNING
                </h1>
                <h2 className='date'>September 3, 2021</h2>
                <p>In the restaurant industry margins are thin and success or failure can come down to how accurate you forecast sales. Everything about your business is based upon the predictions you make for what menu items and how many of them you will sell. You schedule wait staff based upon the forecast for how many customers you will have, your food orders are based upon your forecasts for how many egg’s you will sell during breakfast, how many burgers you will sell at lunch and how many steak’s will be sold at dinner. The chefs are scheduled on your forecast for how long it takes them to prep and cook those egg’s for breakfast, burgers at lunch and steaks for dinner.</p>
                <br/>
                <p>Improving your sales forecasts with machine learning can help you efficiently manage labor based on how much staff is needed per hour instead of how much staff is needed per shift. Managing inventory not on what is needed for the week but what is needed per hour for each day of the week. Using machine learning for sales forecasting can better help you control under-staffing/over-staffing and under-ordering/over-ordering, potentially reducing labor costs by 5%-10%.</p>
                <br/>
                <p>For example on a typical Friday night you sell 20 steak entrees and 10 steak sandwiches over the course of the night. Your prep cook start’s their shift at the usual 5:00pm and starts preparing for that night’s dinner crowd. By 5:30pm your prep crook is swamped preparing steak sandwiches to-go, by 6:00pm you have received ten to-go orders for steak sandwiches and your prep-cook was only able to get five of those sandwiches out on time, leaving you with five unhappy customers because they had a long wait for their to-go order. To make matters even worse since the prep cook was so busy making the steak sandwiches they were unable to make enough pies for that night’s featured dessert leaving you with five more disappointed customers who didn’t get that slice of pie because your prep cook was not able to make enough due to the sandwich orders. This pattern continues for another six weeks then suddenly stops. What happened, why were so many steak sandwiches sold before 6:00pm? Was this a one off event or is it the beginning of a new trend, and the most important question is could the increase in the sales of steak sandwiches before 6:00pm have been predicted?</p>
                <br/>
                <p>Also during this same time period in house dinning was slow because people were getting their orders to-go and others were just not coming in like usual. This left you with too many servers in the dinning room. An extra server in the dinning room may not be a problem for the restaurant because the hourly pay for the server is not all that much, however from the servers point of view too many servers means not enough tables, and not enough tables mean not enough money for the server. By the end of the six weeks one of your servers has quit because they were not making enough money.</p>
                <br/>
                <p>Through the use of machine learning a scenario like this could have been predicted. A predictive model could have been built informing the manager weeks before that first crazy Friday that the ten steak sandwiches would have been sold before 6:00pm and that the dinning room was going to be slow. Knowing this ahead of time the manager could have scheduled the prep cook to come in at 4:30pm instead of the usual 5:00pm, and rotated a Friday off among the server’s for the next six weeks, thus keeping your customers and employees happy and selling more dessert.</p>
                <br/>
                <p>Interested in learning more feel free to reach out to us https://theworkingdata.com/contact-us</p>
                
            
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogPage1