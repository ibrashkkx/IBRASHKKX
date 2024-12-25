import React, { useState } from 'react';

function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Some Title Here',
      img: 'img/tab1.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    },
    {
      title: 'Some Title Here 2',
      img: 'img/tab2.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    },
    {
      title: 'Some Title Here 3',
      img: 'img/tab3.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
    }
  ];

  return (
    <section className="tab-section common-section">
      <div className="container">
        <div className="title-wrapper">
          <h3 className="title">Tab Section</h3>
          <p className="subtitle">This is some text inside of a div block.</p>
        </div>
        <div className="tabs">
          <div className="tabs__nav">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={activeTab === index ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                Tab Button {index + 1}
              </button>
            ))}
          </div>
          <div className="tabs__item">
            <img src={tabs[activeTab].img} alt="img" />
            <h4>{tabs[activeTab].title}</h4>
            <div className="tabs__desc">
              <p>{tabs[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabSection;
