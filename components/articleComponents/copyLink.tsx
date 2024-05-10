import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy, IoCopyOutline } from 'react-icons/io5';

const CopyLink: React.FC<{ link: string }> = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Link Copied Successfully!");
    } catch (error) {
      if (error !== null) {
        if (typeof error === 'object' && 'text' in error) {
          const errorMessage = `Error: ${error.text}`;
          toast.error(errorMessage);
        } else {
          console.error('Unexpected error:', error);
        }
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleCopyLink} // Use the function directly as onClick handler
        className="size-10 bg-white p-2 text-gray-700 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 duration-200 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80"
      >
        {copied ?  <IoCopy /> : <IoCopyOutline />}
      </button>
    </div>
  );
};

export default CopyLink;
