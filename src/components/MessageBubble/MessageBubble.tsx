import type { MessageBubbleProps } from './MessageBubble.types';
import { messageBubbleStyles } from './MessageBubble.styles';

function MessageBubble({ text, own = true }: MessageBubbleProps) {
    const styles = messageBubbleStyles({own});
    
    const formattedTimestamp =  new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
          })
   
    return (
        <div className={styles.base()}>
            <p>{text}</p>
            {formattedTimestamp && (
                <span className={styles.timestamp()}>{formattedTimestamp}</span>
            )}
        </div>
    );
}

export default MessageBubble;
