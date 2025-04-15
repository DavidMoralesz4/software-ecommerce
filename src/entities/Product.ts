import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity({ name: 'products' })
  
  export class Product {
    @PrimaryGeneratedColumn('uuid')
    declare id: string;
  
    @Column()
    declare name: string; // corresponde a "producto" en tu CSV
  
    @Column({ nullable: true })
    declare image1: string;
  
    @Column({ nullable: true })
    declare image2: string;
  
    @Column({ nullable: true })
    declare image3: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    declare price: number; // corresponde a "precio"
  
    @Column('int')
    declare stock: number; // corresponde a "unidad"
  
    @Column({ nullable: true })
    declare size: string; // corresponde a "tallas", opcional
  
    @Column({ nullable: true })
    declare colors: string; // corresponde a "colores", opcional
  
    @Column()
    declare category: string; // corresponde a "categoria"
  }