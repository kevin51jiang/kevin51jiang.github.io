import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Here's what I'll do",
    paragraph:
      "It's better and more useful to everyone if you fix the big problems first — all done as transparently as possible.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Emergency meeting
                </div>
                <h3 className="mt-0 mb-12">COVID-19 Recovery</h3>
                <p className="m-0">
                  <div>
                    If the term ends up being:
                    <ul>
                      <li>
                        <i>online</i>, then helping to advocate with profs and
                        departments to create better courses in conditions that
                        treat students better.
                      </li>
                      <li>
                        <i>offline</i>, then the transition to safe in person
                        activities will require lots of attention.
                      </li>
                    </ul>
                  </div>
                  <div></div>
                  <div>
                    I will make sure that in either situation the transition
                    will be a smooth as possible, allowing you to focus on what
                    you actually paid for — an education.
                  </div>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/social-distancing.svg")}
                  alt="Social distancing"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  The full adventure
                </div>
                <h3 className="mt-0 mb-12">First-year experience</h3>
                <p className="m-0">
                  First years feel like they've just been dropped in the deep
                  end without support and robbed of their first-year experience.
                  While there's a certain amount of difficulty needed for
                  Mansour to have his fun, we need to ensure that there are
                  appropriate supports in place so they can actually survive and
                  thrive during their later years.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/kick.gif")}
                  alt="Mansour kicking chair"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Reviewing resumes and more
                </div>
                <h3 className="mt-0 mb-12">Strengthen widely used programs</h3>
                <p className="m-0">
                  Directing more resources and focus towards EngSoc's most
                  widely used programs where the highest amount of people can
                  benefit, like the resume critiques every term.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/people.svg")}
                  alt="People"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
