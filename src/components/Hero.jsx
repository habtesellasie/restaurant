import Button from './Button';
import heroImg from '/hero-img.png';
import bedImg from '/bed.png';
import mealImg1 from '/meal-1.png';
import mealImg2 from '/meal-2.png';
import mealImg3 from '/meal-4.png';

const Hero = () => {
  return (
    <main className={`relative`}>
      <section className='container px-4'>
        <div className='flex flex-col items-center gap-4 lg:flex-row justify-center lg:py-20'>
          <div className='flex flex-col justify-center items-center lg:items-start xl:mr-[50px]'>
            <h1 className='text-3xl w-[400px] md:text-6xl md:w-[500px] font-bold my-2 text-center lg:text-left xl:text-7xl xl:w-[600px]'>
              Discover Your Perfect{' '}
              <span className='text-primary-clr'>Event</span> Space &{' '}
              <span className='text-secondary-clr'>Catering</span>
            </h1>
            <p className='max-w-[350px] lg:max-w-[500px] lg:text-xl text-lg text-gray-600 text-center lg:text-left py-2 xl:text-[25px]'>
              Welcome here, where unforgettable events come to life. With our
              exceptional facilities and expert services, we&apos;re dedicated
              to making your event a success.
            </p>

            <div className='flex gap-2 my-4 justify-center items-center lg:justify-start'>
              <Button
                label='Inquire Now'
                className={
                  'bg-primary-clr text-white hover:outline hover:bg-transparent hover:outline-2 hover:outline-primary-clr transition hover:-outline-offset-2 hover:text-primary-clr'
                }
              />
              <Button
                label='Book Your Event'
                className={
                  'outline outline-2 outline-primary-clr -outline-offset-2 text-primary-clr hover:bg-primary-clr hover:text-white transition'
                }
              />
            </div>
          </div>
          <div className='relative max-lg:mb-[40px]'>
            <img src={heroImg} alt='hero image' className='block w-full' />
            <img
              src={mealImg3}
              alt=''
              className='absolute shadow-xl shadow-gray-400 rounded-full bottom-[60px] -left-8 w-[120px]'
            />
            <img
              src={mealImg2}
              alt=''
              className='absolute shadow-xl shadow-gray-400 rounded-full -bottom-10 right-[220px] xl:right-[280px] w-[120px]'
            />
            <img
              src={mealImg1}
              alt=''
              className='absolute -bottom-10 right-10 xl:right-20 w-[160px]'
            />
            <img
              src={bedImg}
              alt=''
              className='absolute bottom-[100px] -right-8 w-[120px]'
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
