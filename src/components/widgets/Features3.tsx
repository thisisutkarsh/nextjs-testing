import { FeaturesProps } from '../../shared/types';
import HeaderWidget from '../common/HeaderWidget';

const Features3 = ({ header, items }: FeaturesProps) => (
  <section className="scroll-mt-16 bg-gray-100 py-16" id="features3">
    <div className="container mx-auto px-4 lg:px-8">
      {header && <HeaderWidget header={header} titleClassname="text-3xl md:text-5xl" />}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, description, icon: Icon, link }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900">
              {Icon && <Icon className="h-6 w-6 text-white" />}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-base text-gray-500">{description}</p>
            </div>
            {link && (
              <div className="mt-6">
                <a href={link.href} className="text-base font-medium text-primary-600 hover:underline">
                  {link.label}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3;
