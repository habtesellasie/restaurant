const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='container max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
          What&apos;Different About Manage?
        </h2>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <div className='md:m-y-0  mt-28 flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src='/img/avatar-anisha.png' alt='' className='w-16 -mt-14' />
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayishBlue'>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              laborum id dolorum. Repellendus eos consequatur quas error aperiam
              fugiat laudantium ad perspiciatis necessitatibus harum velit
              reprehenderit repellat, voluptates eius ullam!"
            </p>
          </div>
          <div className='md:m-y-0  mt-28 flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src='/img/avatar-ali.png' alt='' className='w-16 -mt-14' />
            <h5 className='text-lg font-bold'>Ali Bravo</h5>
            <p className='text-sm text-darkGrayishBlue'>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              laborum id dolorum. Repellendus eos consequatur quas error aperiam
              fugiat laudantium ad perspiciatis necessitatibus harum velit
              reprehenderit repellat, voluptates eius ullam!"
            </p>
          </div>
          <div className='md:m-y-0  mt-28 flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src='/img/avatar-richard.png' alt='' className='w-16 -mt-14' />
            <h5 className='text-lg font-bold'>Richard Watts </h5>
            <p className='text-sm text-darkGrayishBlue'>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              laborum id dolorum. Repellendus eos consequatur quas error aperiam
              fugiat laudantium ad perspiciatis necessitatibus harum velit
              reprehenderit repellat, voluptates eius ullam!"
            </p>
          </div>
        </div>
        <div className='my-16'>
          <a
            href='#'
            className='p-2 px-6 pt-2 text-white bg-brightRed rounded-full baseline'
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
