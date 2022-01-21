import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/outline';
import Icon from './Icon';
import styles from './Collapsable.module.css';
import ModalCarousel from '@/components/ModalCarousel/ModalCarousel';

const renderItem = ({
  title,
  description,
  icon,
  list,
  pictures,
  index,
  selectedItem,
  theme,
  itemBackground,
  background,
}) => {
  return (
    <Disclosure as="div" defaultOpen={selectedItem === index}>
      {({ open }) => (
        <>
          <Disclosure.Button
            style={open ? { background: itemBackground } : {}}
            className={classNames({
              [styles.itemButton]: true,
              [styles.itemButtonOpen]: open,
              [styles.bgGray]: open,
              'padding-x': true,
            })}>
            {icon && (
              <Icon
                path={icon}
                color={theme == 'light' ? 'dark' : open ? 'secondary' : 'gray'}
              />
            )}
            <span
              dangerouslySetInnerHTML={{ __html: title }}
              className={classNames({
                [styles.itemTitle]: true,
                [styles.bicolorTitle]: open,
              })}></span>
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
                  style={open ? { background: itemBackground } : {}}
                  className={classNames({
                    [styles.description]: true,
                    'padding-x': true,
                  })}>
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
                    style={{ background: itemBackground }}
                    className={classNames(styles.itemMobileFigure, {
                      'padding-x': true,
                    })}>
                    <ModalCarousel items={pictures}></ModalCarousel>
                  </div>
                ) : (
                  <figure
                    style={{ background: itemBackground }}
                    className={classNames(styles.itemMobileFigure, {
                      'padding-x': true,
                    })}>
                    <div className="aspect_ratio aspect_ratio--569by673">
                      <img
                        src={pictures[0]}
                        className={classNames(
                          styles.itemPicture,
                          'aspect_ratio__item'
                        )}
                      />
                    </div>
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
    <div className="aspect_ratio aspect_ratio--569by673">
      <img
        src={picture}
        className={classNames(styles.itemPicture, 'aspect_ratio__item')}
      />
    </div>
  </figure>
);

function Collapsable({
  isMobile,
  title,
  items,
  containerStyles,
  background,
  theme,
  itemBackground,
}) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedPictures, setSelectedPictures] = useState(
    items[0]?.pictures || []
  );

  useEffect(() => {
    setSelectedPictures(items[selectedItem].pictures);
  }, [selectedItem]);

  return (
    <div
      style={{ background }}
      className={classNames({
        [styles.container]: true,
        [containerStyles]: true,
        [styles[theme]]: true,
      })}>
      <h3
        className={classNames({
          [styles.title]: true,
        })}
        dangerouslySetInnerHTML={{ __html: title }}></h3>
      <div
        className={classNames({
          [styles.itemsContainer]: true,
        })}>
        {items.map((item, index) => (
          <div onClick={() => setSelectedItem(index)} key={index}>
            {renderItem({
              ...item,
              index,
              selectedItem,
              theme,
              background,
              itemBackground,
            })}
          </div>
        ))}
      </div>
      {selectedPictures.length > 1 ? (
        <div
          className={classNames(
            styles.itemDesktopFigure,
            styles.paddingRightFigure
          )}>
          <ModalCarousel items={selectedPictures}></ModalCarousel>
        </div>
      ) : (
        renderPicture(selectedPictures[0], styles.paddingRightFigure)
      )}
    </div>
  );
}

export default Collapsable;
