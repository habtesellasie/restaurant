const Features = () => {
  return (
    <section id='features'>
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What&apos;s Different about Manage?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className='flex flex-col space-y-8 md:w-1/2'>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row align-baseline'>
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  01
                </div>
                <h3 className='text-base.font-bold md:mb-4 md:hidden'>
                  Track company-wide progess
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Track company-wide progess
              </h3>
              <p className='text-darkGrayishBlue'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita autem saepe rem aspernatur minima. Aliquam repellendus
                quaerat rerum odit velit voluptas at. Quod at magni, omnis
                numquam ut animi ad!
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row align-baseline'>
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  02
                </div>
                <h3 className='text-base.font-bold md:mb-4 md:hidden'>
                  Lorem ipsum dolor sit.
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Consectetur adipisicing elit. Eveniet.
              </h3>
              <p className='text-darkGrayishBlue'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita autem saepe rem aspernatur minima. Aliquam repellendus
                quaerat rerum odit velit voluptas at. Quod at magni, omnis
                numquam ut animi ad!
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row align-baseline'>
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  03
                </div>
                <h3 className='text-base.font-bold md:mb-4 md:hidden'>
                  Track company-wide progess
                </h3>
              </div>
            </div>
            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Track company-wide progess
              </h3>
              <p className='text-darkGrayishBlue'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita autem saepe rem aspernatur minima. Aliquam repellendus
                quaerat rerum odit velit voluptas at. Quod at magni, omnis
                numquam ut animi ad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
