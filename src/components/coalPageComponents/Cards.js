import React from 'react';
import coalStyles from './Cards.module.css';

const Cards = () => {
  return (
    <div>
      <h2 className='text-center mt-5 fs-1'>الأصناف</h2>
      <div className={coalStyles.container}>
        <div className={coalStyles.card}>
          <div className={coalStyles.card_image}>
            <img className={coalStyles.img} src='images/coalImg1.png' />
          </div>
          <div className={`${coalStyles.content} text-center p-4`}>
            <h4 className='fw-bold mb-3 mt-3'>الفحم الصلب</h4>
            <p className='fw-light' dir='rtl'>
              {' '}
              يستخدام الفحم الصلب بشكل أساسي كعنصر من مكونات قوالب الفحم.
              بالإضافة إلى ذلك ،يستخدم الفحم الصلب لتدفئة الأماكن لأنه أحد أنظف
              أنواع الفحم للحرق حيث أنه دخان أقل من الأنواع الأخرى. تسمح خصائص
              الاحتراق النظيفة بحرق الفحم الصلب لفترة أطول من الخشب ، مما يجعلها
              جذابة للاستخدام في مواقد التدفئة المنزليةز إلى جانب كونه نظيفة
              وطويلة الاحتراق ، يتم استخدام الفحم الصلب نظرًا لاحتوائه على كثافة
              طاقة عالية جدًا.عند الاحتراق ، يمكن أن يصل الفحم الصلب إلى درجات
              حرارة عالية جدًا ، مما يجعل هذا الوقود استثنائيًا عند تسخينه بسرعة
              ، ويطلق كميات هائلة من الطاقة ويحترق بشدة.{' '}
            </p>
          </div>
        </div>
      </div>
      {/* ------------------1st card--------------------------- */}
      <div className={coalStyles.container}>
        <div className={coalStyles.card}>
          <div className={coalStyles.card_image}>
            <img className={coalStyles.img} src='images/coalImg4.png' />
          </div>
          <div className={`${coalStyles.content} text-center p-4`}>
            <h4 className='fw-bold mb-3 mt-3'>الفحم الحجري</h4>
            <p className='fw-light' dir='rtl'>
              {' '}
              لو"ريم" ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
              أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا
              أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن
              يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
              .{' '}
            </p>
          </div>
        </div>
      </div>
      {/* ------------------2st card--------------------------- */}
      <div className={coalStyles.container}>
        <div className={coalStyles.card}>
          <div className={coalStyles.card_image}>
            <img
              className={coalStyles.img}
              src='images/coalImg5.png'
              alt='first'
            />
          </div>
          <div className={`${coalStyles.content} text-center p-4`}>
            <h4 className='fw-bold mb-3 mt-3'>الفحم البني</h4>
            <p className='fw-light' dir='rtl'>
              {' '}
              لو"ريم" ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
              أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا
              أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن
              يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
              .{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
