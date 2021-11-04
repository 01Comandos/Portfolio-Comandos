import classNames from "classnames";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Icon from './Icon';
import styles from "./Collapsable.module.css";

const renderItem = ({ title, description, icon }) => {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames({
              [styles.itemButton]: true,
              [styles.bgPrimary]: !open,
              [styles.bgGray]: open,
            })}
          >
            {icon && <Icon path={icon} color={open ? 'secondary' : 'white'} />}
            <span
              dangerouslySetInnerHTML={{ __html: title }}
              className={styles.itemTitle}
            ></span>
            {open ? (<ChevronUpIcon
              className={classNames({
                [styles.itemButtonIcon]: true,
                [styles.openArrow]: true
              })}
            />) : (<ChevronDownIcon
              className={classNames({
                [styles.itemButtonIcon]: true,
                [styles.closeArrow]: true
              })}
            />)}
            
          </Disclosure.Button>
          <Disclosure.Panel className={styles.description}>
            {description}
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
          'padding-x': true
        })}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </h3>
      {items.map((item) => renderItem(item))}
    </div>
  );
}

export default Collapsable;
