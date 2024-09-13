import { CallToActionProps, CallToAction } from '../../shared/types';

const CallToAction = (props: { cta: CallToActionProps }) => {
  const { title, subtitle, callToAction } = props.cta;
  const { text, href, icon: Icon } = callToAction as CallToAction;

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="callToActionOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pb-12 pt-4 md:pb-20 md:pt-12">
          <div className="card-main mx-auto max-w-3xl p-6 text-center">
            {title && (
              <h2 className="leading-tighter font-heading mb-4 text-3xl font-bold tracking-normal md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}
            {text && href && (
              <div className="mx-auto mt-6 max-w-xs">
                <a className="btn btn-primary w-full sm:w-auto" href={href}>
                  {Icon && <Icon className="-ml-1.5 mr-1 h-5 w-5" />} {text}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
