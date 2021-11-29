import classNames from "classnames";
import ImageGallery from "react-image-gallery";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Icon from "./Icon";
import styles from "./Collapsable.module.css";

const renderItem = ({
  title,
  description,
  icon,
  list,
  pictures,
  index,
  selectedItem,
}) => {
  return (
    <Disclosure as="div" defaultOpen={selectedItem === index}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames({
              [styles.itemButton]: true,
              [styles.itemButtonOpen]: open,
              [styles.bgPrimary]: !open,
              [styles.bgGray]: open,
              "padding-x": true,
            })}
          >
            {icon && <Icon path={icon} color={open ? "secondary" : "gray"} />}
            <span
              dangerouslySetInnerHTML={{ __html: title }}
              className={classNames({
                [styles.itemTitle]: true,
                [styles.bicolorTitle]: open,
              })}
            ></span>
            {open ? (
              <ChevronUpIcon
                className={classNames({
                  [styles.itemButtonIcon]: true,
                  [styles.openArrow]: true,
                })}
              />
            ) : (
              <ChevronDownIcon
                className={classNames({
                  [styles.itemButtonIcon]: true,
                  [styles.closeArrow]: true,
                })}
              />
            )}
          </Disclosure.Button>
          <Disclosure.Panel>
            {({ close }) => (
              <>
                {index !== selectedItem && close()}
                <div
                  className={classNames({
                    [styles.description]: true,
                    "padding-x": true,
                  })}
                >
                  <p>{description}</p>
                  <ul>
                    {list.map((item, idx) => (
                      <li className={styles.itemList} key={idx}>
                        <div className={styles.checkIconContainer}>
                          <CheckCircleIcon className={styles.checkIcon} />
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {pictures.length > 1 ? (
                  <div
                    className={classNames(styles.itemMobileFigure, {
                      "padding-x": true,
                    })}
                  >
                    <ImageGallery
                      originalClass={styles.itemPicture}
                      items={pictures}
                      showThumbnails={false}
                      showNav={false}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      showIndex={true}
                    />
                  </div>
                ) : (
                  <figure
                    className={classNames(styles.itemMobileFigure, {
                      "padding-x": true,
                    })}
                  >
                    <img src={pictures[0]} className={styles.itemPicture} />
                  </figure>
                )}
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const renderPicture = (picture, containerStyles = {}) => (
  <figure className={classNames(styles.itemDesktopFigure, containerStyles)}>
    <img src={picture.original} className={styles.itemPicture} />
  </figure>
);

function Collapsable({ isMobile, title, items, containerStyles = {} }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedPictures, setSelectedPictures] = useState(
    items[0]?.pictures || []
  );

  useEffect(() => {
    setSelectedPictures(items[selectedItem].pictures);
  }, [selectedItem]);

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [containerStyles]: true,
      })}
    >
      <h3
        className={classNames({
          [styles.title]: true,
        })}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <div
        className={classNames({
          [styles.itemsContainer]: true,
        })}
      >
        {items.map((item, index) => (
          <div onClick={() => setSelectedItem(index)} key={index}>
            {renderItem({ ...item, index, selectedItem })}
          </div>
        ))}
      </div>
      {selectedPictures.length > 1 ? (
        <div
          className={classNames(
            styles.itemDesktopFigure,
            styles.paddingRightFigure
          )}
        >
          <ImageGallery
            renderItem={renderPicture}
            items={selectedPictures}
            showThumbnails={false}
            showNav={!isMobile}
            showFullscreenButton={false}
            showPlayButton={false}
            showIndex={true}
          />
        </div>
      ) : (
        renderPicture(
          { original: selectedPictures[0] },
          styles.paddingRightFigure
        )
      )}
    </div>
  );
}

export default Collapsable;
