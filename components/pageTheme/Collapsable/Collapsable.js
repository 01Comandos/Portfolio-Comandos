import classNames from "classnames";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Icon from "./Icon";
import styles from "./Collapsable.module.css";

const renderItem = ({ title, description, icon, list }, index) => {
  return (
    <Disclosure as="div" key={index}>
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
          <Disclosure.Panel
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

function Collapsable({ title, items, containerStyles = {} }) {
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
          "padding-x": true,
        })}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <div
        className={classNames({
          [styles.itemsContainer]: true,
        })}
      >
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}

export default Collapsable;
