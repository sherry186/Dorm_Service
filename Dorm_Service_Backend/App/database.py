from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# here, please change password into your postgresql password
engine = create_engine("postgresql://postgres:password@localhost/dorm_service", echo = True)


# 葉的
# import os
# from dotenv import load_dotenv
# load_dotenv()
# POSGRES_URI = os.getenv('POSGRES_URI')
# engine = create_engine(POSGRES_URI, echo = True)


Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)



#done setting up database
