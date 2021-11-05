import classNames from "classnames";
import { useState } from "react";
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
  picture,
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
                <figure
                  className={classNames({
                    [styles.itemMobileFigure]: true,
                    "padding-x": true,
                  })}
                >
                  <img src={picture} className={styles.itemPicture} />
                </figure>
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

function Collapsable({ title, items, containerStyles = {} }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [containerStyles]: true,
      })}
    >
      <h3
        className={classNames({
          [styles.title]: true
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
      <figure className={styles.itemDesktopFigure}>
        <img src={items[selectedItem].picture} className={styles.itemPicture} />
      </figure>
    </div>
  );
}

export default Collapsable;
