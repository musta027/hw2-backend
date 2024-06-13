import mongoose from 'mongoose';
import { CreateMessageDto } from './dtos/CreateMessage.dot';
import MessageModel, { IMessage } from './models/Message';
import { Message} from './types/response';



class MessageService {

    async getMessageById(id: string): Promise<IMessage | null> {
      return await MessageModel.findById(id).exec();
    }

    async getMessages(): Promise<IMessage[]> {
      return await MessageModel.find().exec(); 
    }

    async createMessage(createMessageDto: CreateMessageDto): Promise<IMessage> {
      const { username, content} = createMessageDto;
      const newMessage = new MessageModel({
        username,
        content
      });
      await newMessage.save();
      return newMessage;
    }
  
    
  }
  
  export default MessageService;
  