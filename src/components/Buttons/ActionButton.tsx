import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/lib/utils';
import Spinner from '../icons/Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  verticalPadding?: '2' | '3' | '4' | '6' | '8';
  className?: string;
  isLoading?: boolean;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string;
  verticalPadding?: '2' | '3' | '4' | '6' | '8';
  className?: string;
  href: string;
  isLoading?: boolean;
}

type Props = ButtonProps | LinkProps;

const ActionButton: FC<Props> = ({
  title = 'Submit',
  verticalPadding = '2',
  className,
  isLoading = false,
  ...props
}) => {
  // Map verticalPadding to actual Tailwind classes to avoid purging in production
  const paddingClass =
    {
      '2': 'py-2',
      '3': 'py-3',
      '4': 'py-4',
      '6': 'py-6',
      '8': 'py-8'
    }[verticalPadding] || 'py-2';

  const classname = cn(
    'bg-[#75A709] hover:bg-[#8bc234] active:bg-[#a3d65f] text-white px-8 rounded-full font-medium transition-colors inline-flex items-center justify-center cursor-pointer',
    'disabled:bg-[#75A709] disabled:cursor-not-allowed',
    paddingClass,
    className
  );

  if ('href' in props && props.href) {
    const linkProps = props as LinkProps;
    // Prevent navigation when loading
    if (isLoading) {
      linkProps.onClick = (e) => e.preventDefault();
    }

    return (
      <a
        className={cn(classname, {
          'pointer-events-none': isLoading
        })}
        {...linkProps}>
        {isLoading ? <Spinner /> : title}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type='submit'
      className={classname}
      disabled={buttonProps.disabled || isLoading}
      {...buttonProps}>
      {isLoading ? <Spinner /> : title}
    </button>
  );
};

export default ActionButton;
