import React from 'react'
import './Dashpost.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
const Dashpost = () => {
  return (
    <div className="share">
    <div className='sharecontainer'>
        <div className="sharewrap">
            <div className="sharetop">
                <img src=".\mon-and-child.png" alt="momandchild.png" className='shareimg' />
                <input placeholder="How's your mental status?" className='shareinput'/>
            </div>

            <hr className='sharebreak'/>

            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMediaIcon htmlColor='#1e3f66' className='shareicon'/>
                        <span className='sharetext'>Photo/Video</span>
                    </div>

                    <div className="shareoption">
                        <RoomIcon htmlColor='#1e3f66' className='shareicon'/>
                        <span className='sharetext'>Location</span>
                    </div>

                    <div className="shareoption">
                        <EmojiEmotionsIcon htmlColor='#1e3f66' className='shareicon'/>
                        <span className='sharetext'>Feelings</span>
                    </div>
                </div>

                <button className="sharebutton">Post</button>
            </div>
        </div>
    </div>

<div className='postcontainer'>
<div className="postwrap">
    <div className="posttop">
        <div className="posttopleft">
            <img src=".\mon-and-child.png" alt="momchildimg" className='postprofile' />
            <div className="postinfo">
                <span className="postusername">Sonu G.C.</span>
                <span className="posttext">5 minutes ago</span>
            </div>
        </div>
        <div className="posttopright">
            <MoreVertIcon className='verticon'/>
            
        </div>
    </div>

    <div className="postcenter">
        <span className="postcaption">"I've been struggling with overwhelming stress and constant worry that make it hard to enjoy life. It's as if my mind is always racing, filled with thoughts of what could go wrong. This persistent anxiety has seeped into every aspect of my life, affecting my relationships, work, and overall sense of happiness."</span>
        {/* <img src=".\mon-and-child.png" alt="" className='postedimg' /> */}
    </div>

    <div className="postbottom">
        <div className="postbottomleft">
          
            <FavoriteIcon
            htmlColor='#1e3f66'
            fontSize='small'
            />
            <span className='likecount'>30</span>

            <ChatBubbleIcon
                htmlColor='#1e3f66'
                fontSize='small' 
                style={{ transform: 'scaleX(-1)' }}
            />
            <span className='commentcount'>5</span>

            <ReplyIcon
                htmlColor='#1e3f66'
                fontSize='medium'
                style={{ transform: 'scaleX(-1)' } }
            />
            <span className='sharecount'>4</span>

        </div>
    </div>
</div>
</div>

<div className='postcontainer'>
<div className="postwrap">
    <div className="posttop">
        <div className="posttopleft">
            <img src=".\mon-and-child.png" alt="momchildimg" className='postprofile' />
            <div className="postinfo">
                <span className="postusername">Sonu G.C.</span>
                <span className="posttext">5 minutes ago</span>
            </div>
        </div>
        <div className="posttopright">
            <MoreVertIcon className='verticon'/>
            
        </div>
    </div>

    <div className="postcenter">
        <span className="postcaption">"I've been struggling with overwhelming stress and constant worry that make it hard to enjoy life. It's as if my mind is always racing, filled with thoughts of what could go wrong. This persistent anxiety has seeped into every aspect of my life, affecting my relationships, work, and overall sense of happiness."</span>
        {/* <img src=".\mon-and-child.png" alt="" className='postedimg' /> */}
    </div>

    <div className="postbottom">
        <div className="postbottomleft">
          
            <FavoriteIcon
            htmlColor='#1e3f66'
            fontSize='small'
            />
            <span className='likecount'>30</span>

            <ChatBubbleIcon
                htmlColor='#1e3f66'
                fontSize='small' 
                style={{ transform: 'scaleX(-1)' }}
            />
            <span className='commentcount'>5</span>

            <ReplyIcon
                htmlColor='#1e3f66'
                fontSize='medium'
                style={{ transform: 'scaleX(-1)' } }
            />
            <span className='sharecount'>4</span>

        </div>
    </div>
</div>
</div>

<div className='postcontainer'>
<div className="postwrap">
    <div className="posttop">
        <div className="posttopleft">
            <img src=".\mon-and-child.png" alt="momchildimg" className='postprofile' />
            <div className="postinfo">
                <span className="postusername">Sonu G.C.</span>
                <span className="posttext">5 minutes ago</span>
            </div>
        </div>
        <div className="posttopright">
            <MoreVertIcon className='verticon'/>
            
        </div>
    </div>

    <div className="postcenter">
        <span className="postcaption">"I've been struggling with overwhelming stress and constant worry that make it hard to enjoy life. It's as if my mind is always racing, filled with thoughts of what could go wrong. This persistent anxiety has seeped into every aspect of my life, affecting my relationships, work, and overall sense of happiness."</span>
        {/* <img src=".\mon-and-child.png" alt="" className='postedimg' /> */}
    </div>

    <div className="postbottom">
        <div className="postbottomleft">
          
            <FavoriteIcon
            htmlColor='#1e3f66'
            fontSize='small'
            />
            <span className='likecount'>30</span>

            <ChatBubbleIcon
                htmlColor='#1e3f66'
                fontSize='small' 
                style={{ transform: 'scaleX(-1)' }}
            />
            <span className='commentcount'>5</span>

            <ReplyIcon
                htmlColor='#1e3f66'
                fontSize='medium'
                style={{ transform: 'scaleX(-1)' } }
            />
            <span className='sharecount'>4</span>

        </div>
    </div>
</div>
</div>

<div className='postcontainer'>
<div className="postwrap">
    <div className="posttop">
        <div className="posttopleft">
            <img src=".\mon-and-child.png" alt="momchildimg" className='postprofile' />
            <div className="postinfo">
                <span className="postusername">Sonu G.C.</span>
                <span className="posttext">5 minutes ago</span>
            </div>
        </div>
        <div className="posttopright">
            <MoreVertIcon className='verticon'/>
            
        </div>
    </div>

    <div className="postcenter">
        <span className="postcaption">"I've been struggling with overwhelming stress and constant worry that make it hard to enjoy life. It's as if my mind is always racing, filled with thoughts of what could go wrong. This persistent anxiety has seeped into every aspect of my life, affecting my relationships, work, and overall sense of happiness."</span>
        {/* <img src=".\mon-and-child.png" alt="" className='postedimg' /> */}
    </div>

    <div className="postbottom">
        <div className="postbottomleft">
          
            <FavoriteIcon
            htmlColor='#1e3f66'
            fontSize='small'
            />
            <span className='likecount'>30</span>

            <ChatBubbleIcon
                htmlColor='#1e3f66'
                fontSize='small' 
                style={{ transform: 'scaleX(-1)' }}
            />
            <span className='commentcount'>5</span>

            <ReplyIcon
                htmlColor='#1e3f66'
                fontSize='medium'
                style={{ transform: 'scaleX(-1)' } }
            />
            <span className='sharecount'>4</span>

        </div>
    </div>
</div>
</div>

<div className='postcontainer'>
<div className="postwrap">
    <div className="posttop">
        <div className="posttopleft">
            <img src=".\mon-and-child.png" alt="momchildimg" className='postprofile' />
            <div className="postinfo">
                <span className="postusername">Sonu G.C.</span>
                <span className="posttext">5 minutes ago</span>
            </div>
        </div>
        <div className="posttopright">
            <MoreVertIcon className='verticon'/>
            
        </div>
    </div>

    <div className="postcenter">
        <span className="postcaption">"I've been struggling with overwhelming stress and constant worry that make it hard to enjoy life. It's as if my mind is always racing, filled with thoughts of what could go wrong. This persistent anxiety has seeped into every aspect of my life, affecting my relationships, work, and overall sense of happiness."</span>

    </div>

    <div className="postbottom">
        <div className="postbottomleft">
          
            <FavoriteIcon
            htmlColor='#1e3f66'
            fontSize='small'
            />
            <span className='likecount'>30</span>

            <ChatBubbleIcon
                htmlColor='#1e3f66'
                fontSize='small' 
                style={{ transform: 'scaleX(-1)' }}
            />
            <span className='commentcount'>5</span>

            <ReplyIcon
                htmlColor='#1e3f66'
                fontSize='medium'
                style={{ transform: 'scaleX(-1)' } }
            />
            <span className='sharecount'>4</span>

        </div>
    </div>
</div>
</div>

</div>
     
  )

}

export default Dashpost
