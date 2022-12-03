import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.category.upsert({
    where: { id: 1 },
    update : {},
    create: {
      title: 'Дизайн',
      tasks: {
        create: [
          {
            title: 'Нарисовать спрайты для игры',
            description: 'Для ролевой 2D игры необходимо создать ' +
              'спрайты персонажей и врагов',
            budget: 30000,
            customerId: '15',
            status: {
              create: {
                title: 'Новое'
              }
            }
          },
          {
            title: 'Нарисовать портрет на день рождения',
            description: 'У отца день рождения и необходимо ' +
              'нарисовать его портрет в мультяшном стиле для подарка',
            budget: 45000,
            deadline: new Date('2022-12-15 10:00:00'),
            preview: 'assets/img/tasks/present.png',
            address: 'Москва',
            tags: {
              create: [
                {
                  title: 'present'
                },
                {
                  title: 'birthday'
                }
              ]
            },
            customerId: '11',
            status: {
              create: {
                title: 'Отменено'
              }
            }
          }
        ]
      }
    }
  });
  await prisma.category.upsert({
    where: { id: 2 },
    update : {},
    create: {
      title: 'Разработка',
      tasks: {
        create: [
          {
            title: 'Разработка сайта',
            description: 'Необходимо разработать сайт для рекламы услуг по макияжу',
            budget: 150000,
            deadline: new Date('2022-12-07 23:59:59'),
            preview: 'assets/img/tasks/web-design.png',
            address: 'Астана',
            tags: {
              create: [
                {
                  title: 'web'
                },
                {
                  title: 'develop'
                },
                {
                  title: 'beauty'
                }
              ]
            },
            customerId: '2',
            performerId: '14',
            candidates: {
              create: [
                {
                  performerId: '14',
                },
                {
                  performerId: '1',
                },
                {
                  performerId: '33',
                }
              ]
            },
            comments: {
              create: [
                {
                  userId: '11',
                  text: 'А можно посмотреть техническое задание?'
                },
                {
                  userId: '6',
                  text: 'Покупайте у нас уже готовый конструктор сайтов и сможете сделать сами'
                }
              ]
            },
            status: {
              create: {
                title: 'В работе'
              }
            }
          },
          {
            title: 'Разработать мобильое приложение',
            description: 'В короткие сроки необходимо реализовать ' +
              'мобильное приложение по доставке еды',
            budget: 450000,
            deadline: new Date('2022-12-03 23:59:59'),
            address: 'Санкт-Петербург',
            tags: {
              create: [
                {
                  title: 'mobile'
                },
                {
                  title: 'develop'
                },
                {
                  title: 'food'
                }
              ],
            },
            customerId: '11',
            performerId: '23',
            candidates: {
              create: [
                {
                  performerId: '23',
                }
              ]
            },
            status: {
              create: {
                title: 'Провалено'
              }
            }
          }
        ]
      }
    }
  });

  console.info('База была заполнена');
}


fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
