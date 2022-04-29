import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { iconName: "flaticon-002-welding", tabMenuName: "Web Development" },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Mobile Apps"
      },
      { iconName: "flaticon-015-cart", tabMenuName: "Programming Languages" },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Database" }
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "2.jpg",
        contentTitle: "Modern React with Redux",
        contentDesc:
          "Thousands of other engineers have learned React and Redux, and you can too. This course uses a time-tested, battle-proven method to make sure you understand exactly how React and Redux work, and will get you a new job working as a software engineer or help you build that app you've always been dreaming about..",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "2.jpg",
        contentTitle: "The Complete React Native Course",
        contentDesc:
          "React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain two platforms and share a common technology—React.V=Many platforms, one React.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "2.jpg",
        contentTitle: "JavaScript: Understanding the Weird Parts",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "2.jpg",
        contentTitle: "MongoDB - The Complete Developer Guide",
        contentDesc:
          "Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        serviceLink: "service-details-left-sidebar"
      }
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Most Viewed Courses <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
