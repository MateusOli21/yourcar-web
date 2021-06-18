import React from 'react';
import { IconType } from 'react-icons';

interface IComponentProps {
  title: string;
  description: string;
  Icon: IconType;
}

const FooterItemWrapper: React.FC<IComponentProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className=" flex flex-col text-white" style={{ maxWidth: '260px' }}>
    <h6 className="w-max font-bold md:text-lg text-white mb-4 pb-2 border-b-2 border-red-500">
      {title}
    </h6>

    <div className="flex flex-row items-center gap-3">
      <div className="w-min p-3 bg-red-500">
        <Icon size={18} />
      </div>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export default FooterItemWrapper;
