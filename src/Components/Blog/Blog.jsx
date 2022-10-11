import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] min-h-[80vh] flex flex-col mx-auto'>
            {/* Question 1 seciton */}
            <div className='w-full py-8 bg-primary text-white text-center '>
                <div className='bg-base-100 w-[95%] mx-auto rounded-lg p-4'>
                <h2 className='text-2xl'>What is the purpose of React Router</h2>
                <p className='py-5'>
                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    React Router is mainly use for routing in single page applications and website. By useing React router a 
                    Developer can easily hyperlink his different part of the page. React router provide refreash free navigation.
                    For this reason the website need to load one time after that user can navigate anywhere of the page without refreasing.
                    This no refreash feature give a buttery smooth experience to the users. 
                </p>

                </div>

            </div>
            {/* Question 2 section */}
            <div className='w-full py-8 bg-primary text-white text-center'>
            <div className='bg-base-100 w-[95%] mx-auto rounded-lg p-4'>
                <h2 className='text-2xl'>How does Context API works?</h2>
                <p className='py-5'>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. By using context api it is so easy to send data to any component in the react app. Props dreeling can also do that but props drilling can be very gibbarish when the data need to send to a very lower level component.
                </p>

                </div>

            </div>
            {/* Question 3 section */}
            <div className='w-full py-8 bg-primary text-white text-center'>
                <div className='bg-base-100 w-[95%] mx-auto rounded-lg p-4'>
                <h2 className='text-2xl'>About useRef Hook</h2>
                <p className='py-5'>
                The useRef Hook allows you to persist values between renders.

        It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly. In order to work with refs in React you need to first initialize a ref which is what the useRef hook is for. This hook is very straightforward, and takes an initial value as the only argument. This hook then returns a ref for you to work with.


                </p>

                </div>

            </div>
            
        </div>
    );
};

export default Blog;